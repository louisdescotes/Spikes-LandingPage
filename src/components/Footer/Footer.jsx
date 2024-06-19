import React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center h-full py-24 ">  
      <div className="mt-12 w-10/12 text-bones flex justify-between gap-10">
        <section className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h5 className="text-2xl">Contact</h5>
            <div className="text-lg">
              <p>Work inquires: work@vaultflow.com</p>
              <p>PR and speaking: press@vaultflow.com</p>
              <p>New business: newbusiness@vaultflow.com</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="text-2xl">Carrers</h5>
            <p className="text-lg">Careers@vaultflow.com</p>
          </div>

          <div>
            <p className="text-[#939393] text-base">© 2023 Vaultflow. All Rights Reserved.</p>
          </div>
        </section>

        <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
            <h5 className="text-2xl">Adress</h5>
              <p className="text-lg">398 11th Street, Floor 2 San Francisco, CA 94103</p>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="text-2xl">Social</h5>
            <div className="flex flex-col text-lg">
                <a href="">Twitter</a>
                <a href="">Instagram</a>
                <a href="">Tik Tok</a>
            </div>
          </div>

        </section>

        <section className="flex h-full justify-end items-end">
        <div>
            <img src="/logo.png" alt="" />
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
