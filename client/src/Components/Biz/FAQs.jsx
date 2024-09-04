import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function AccordionExpandIcon() {
  return (
    <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h3 className="text-4xl font-extrabold text-gray-800">
            Frequently Asked <span className="text-red-500">Questions</span>
          </h3>

          <p className="text-lg text-gray-600 mb-8">
            Here are some common questions and answers about our services. If
            you have more questions, feel free to contact us!
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-6">
          <Accordion
            className="border border-gray-300 rounded-lg shadow-lg transition-shadow hover:shadow-xl"
            elevation={0}
          >
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon className="text-red-500" />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="bg-gray-200 text-gray-800 rounded-t-lg cursor-pointer"
            >
              <Typography className="text-xl font-semibold">
                What services do you offer?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-white text-gray-700 rounded-b-lg p-6">
              <Typography>
                We offer a range of services including business registration,
                compliance consulting, and legal advisory. Our goal is to
                support you throughout your business journey.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className="border border-gray-300 rounded-lg shadow-lg transition-shadow hover:shadow-xl"
            elevation={0}
          >
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon className="text-red-500" />}
              aria-controls="panel2-content"
              id="panel2-header"
              className="bg-gray-200 text-gray-800 rounded-t-lg cursor-pointer"
            >
              <Typography className="text-xl font-semibold">
                How long does the registration process take?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-white text-gray-700 rounded-b-lg p-6">
              <Typography>
                The registration process typically takes between 5 to 7 business
                days, depending on the complexity and requirements. We strive to
                ensure a smooth and efficient experience for our clients.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className="border border-gray-300 rounded-lg shadow-lg transition-shadow hover:shadow-xl"
            elevation={0}
          >
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon className="text-red-500" />}
              aria-controls="panel3-content"
              id="panel3-header"
              className="bg-gray-200 text-gray-800 rounded-t-lg cursor-pointer"
            >
              <Typography className="text-xl font-semibold">
                Do you offer support after registration?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-white text-gray-700 rounded-b-lg p-6">
              <Typography>
                Yes, we provide ongoing support after registration. Whether you
                need assistance with compliance or additional services, our team
                is here to help you succeed.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* New FAQs based on the table */}
          <Accordion
            className="border border-gray-300 rounded-lg shadow-lg transition-shadow hover:shadow-xl"
            elevation={0}
          >
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon className="text-red-500" />}
              aria-controls="panel4-content"
              id="panel4-header"
              className="bg-gray-200 text-gray-800 rounded-t-lg cursor-pointer"
            >
              <Typography className="text-xl font-semibold">
                What is the difference in liability protection between a Private
                Limited Company and a Proprietorship Firm?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-white text-gray-700 rounded-b-lg p-6">
              <Typography>
                A Private Limited Company offers limited liability protection,
                meaning that the personal assets of its owners are protected
                from business debts and liabilities. In contrast, a
                Proprietorship Firm does not offer liability protection; the
                owner is personally liable for all debts and obligations of the
                business.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className="border border-gray-300 rounded-lg shadow-lg transition-shadow hover:shadow-xl"
            elevation={0}
          >
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon className="text-red-500" />}
              aria-controls="panel5-content"
              id="panel5-header"
              className="bg-gray-200 text-gray-800 rounded-t-lg cursor-pointer"
            >
              <Typography className="text-xl font-semibold">
                Can foreign individuals own a One Person Company?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-white text-gray-700 rounded-b-lg p-6">
              <Typography>
                No, foreign ownership is not allowed in a One Person Company. It
                can only be owned by a single resident individual.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className="border border-gray-300 rounded-lg shadow-lg transition-shadow hover:shadow-xl"
            elevation={0}
          >
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon className="text-red-500" />}
              aria-controls="panel6-content"
              id="panel6-header"
              className="bg-gray-200 text-gray-800 rounded-t-lg cursor-pointer"
            >
              <Typography className="text-xl font-semibold">
                What are the compliance requirements for a Limited Liability
                Partnership (LLP) compared to a Partnership Firm?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-white text-gray-700 rounded-b-lg p-6">
              <Typography>
                LLPs have moderate compliance requirements, including annual
                filings and maintaining records as per the LLP Act, 2008. In
                comparison, Partnership Firms have lower compliance requirements
                and are generally subject to fewer regulations.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className="border border-gray-300 rounded-lg shadow-lg transition-shadow hover:shadow-xl"
            elevation={0}
          >
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon className="text-red-500" />}
              aria-controls="panel7-content"
              id="panel7-header"
              className="bg-gray-200 text-gray-800 rounded-t-lg cursor-pointer"
            >
              <Typography className="text-xl font-semibold">
                How does taxation liability differ between a Limited Liability
                Partnership (LLP) and a Proprietorship Firm?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="bg-white text-gray-700 rounded-b-lg p-6">
              <Typography>
                A Limited Liability Partnership (LLP) faces moderate taxation
                liabilities, whereas a Proprietorship Firm typically has lower
                taxation liabilities. LLPs are taxed as per the provisions of
                the LLP Act, while Proprietorship Firms are taxed based on the
                personal income tax rates of the proprietor.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
