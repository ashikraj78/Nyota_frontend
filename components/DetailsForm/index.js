const {
  Modal,
  Dropdown,
  Input,
  DatePicker,
  TimePicker,
  Button,
  Switch,
} = require("antd");
import { paymentService } from "@/services";
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { payment } from "../Payments";
const { TextArea } = Input;
function DetailsForm({ detailsForm, setDetailsForm }) {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [addPhotos, setAddPhotos] = useState(false);
  const invitingSide = [
    {
      label: "Groom Side",
      key: "1",
    },
    {
      label: "Bride Side",
      key: "2",
    },
  ];
  function handleInvitingSide() {
    console.log("hello");
  }
  const onDateChange = (date, dateString) => {
    console.log(date, dateString);
  };
  async function handlePayment() {
    function loadScript(src) {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
          resolve(true);
        };
        script.onerror = () => {
          resolve(false);
        };
        document.body.appendChild(script);
      });
    }
    async function displayRazorPay() {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!res) {
        return;
      }
      let data = {
        amount: 100,
        currency: "INR",
      };
      const result = await paymentService.createSession(data);
      const { amount, id: order_id, currency } = result;
      const options = {
        key: "rzp_test_KalvucdlwmjOEd",
        amount: amount,
        currency: currency,
        name: "Nyota",
        description: " Nyota Test Transaction",
        image: "https://via.placeholder.com/150",
        order_id: order_id,
        handler: async (response) => {
          const responseData = {
            orderId: order_id,
            paymentId: response.razorpay_payment_id,
            signature: response.razorpay_signature,
          };
          const verifiedResponse = await paymentService.verifyPayment(
            responseData
          );
          const { data } = verifiedResponse;
          setPaymentId(data.id);
          setSignature(data.signature);
          alert("Payment successful");
        },
        prefill: {
          name: "Ashik Raj",
          email: "ashikraj.78@gmail.com",
          contact: "8989047460",
        },
        notes: {
          address: "Dharamshala Alt Campus",
        },
        theme: {
          color: "#F37254",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    }
    displayRazorPay();
  }

  return (
    <Modal
      visible={detailsForm}
      footer={null}
      onCancel={() => setDetailsForm(false)}
    >
      <section>
        {page == 1 && (
          <div>
            <div>
              <label>Who is inviting</label>
              <Dropdown.Button
                icon={<DownOutlined />}
                menu={{
                  items: invitingSide,
                }}
                onClick={handleInvitingSide}
              >
                Invitation is from which side
              </Dropdown.Button>
            </div>
            <div className="mt-8">
              <p>Bride Side</p>
              <br></br>
              <label>Name</label>
              <Input />
              <br></br>
              <label>Mother's Name</label>
              <Input />
              <br></br>
              <label>Father's Name</label>
              <Input />
              <br></br>
              <label>Grand Mother's Name</label>
              <Input />
              <br></br>
              <label>Grand Father's Name</label>
              <Input />
            </div>
            <div className="mt-8">
              <p>Groom Side</p>
              <br></br>
              <label>Name</label>
              <Input />
              <br></br>
              <label>Mother's Name</label>
              <Input />
              <br></br>
              <label>Father's Name</label>
              <Input />
              <br></br>
              <label>Grand Mother's Name</label>
              <Input />
              <br></br>
              <label>Grand Father's Name</label>
              <Input />
            </div>
          </div>
        )}
        {page == 2 && (
          <div>
            <label>Wedding Date : </label>
            <DatePicker onChange={onDateChange} />
            <br></br>
            <label>Wedding Time : </label>
            <TimePicker
              open={open}
              onOpenChange={setOpen}
              renderExtraFooter={() => (
                <Button
                  size="small"
                  type="primary"
                  onClick={() => setOpen(false)}
                >
                  OK
                </Button>
              )}
            />
            <br></br>
            <label>Wedding Venue</label>
            <Input placeholder="Address Line 1" className="mt-2" />
            <Input placeholder="Address Line 2" className="mt-2" />
            <Input placeholder="City" className="mt-2" />
            <Input placeholder="State" className="mt-2" />
            <Input placeholder="India" className="mt-2" />
            <br></br>
            <label>Special Notes : </label>
            <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
          </div>
        )}
        {page == 3 && (
          <div>
            <p>Phone No.</p>
            <Input />
            <br></br>
            <label>Do you want to add photos</label>
            <Switch
              checkedChildren="Yes"
              unCheckedChildren="No"
              onChange={() => setAddPhotos(!addPhotos)}
            />
            {addPhotos && <p>this is my photos</p>}
            <br></br>
            <label>More : </label>
            <TextArea
              rows={4}
              placeholder="If we missed a few details that you wish to include in video , put
them here"
              maxLength={6}
            />
            <br></br>
            <div
              className="bg-lime-600 rounded-3xl py-4 mt-4 text-gray-100 text-center cursor-pointer"
              onClick={handlePayment}
            >
              <button>Buy Now</button>
            </div>
          </div>
        )}

        <div className="flex items-center justify-center mt-4 ">
          {page !== 1 && (
            <FaArrowCircleLeft
              className="mr-4 cursor-pointer"
              size={32}
              onClick={() => setPage(page - 1)}
            />
          )}
          {page !== 3 && (
            <FaArrowCircleRight
              className="ml-4 cursor-pointer"
              size={32}
              onClick={() => setPage(page + 1)}
            />
          )}
        </div>
      </section>
    </Modal>
  );
}
export default DetailsForm;
