import React from "react";
import styled from "styled-components";

import { Section, Container } from "../global";

const Features = () => (
  <Section id="Terms and Conditions">
    <StyledContainer>
      <SectionTitle>Loophole Terms of Services</SectionTitle>

      <FeatureItem>
        <FeatureText>
          Our terms of services agreement describe the conditions for use of
          Loophole and the agreements made by users during registration and
          continued use of the service.
        </FeatureText>
      </FeatureItem>
      <FeatureItem>
        <FeatureTitle>Agreement</FeatureTitle>
        <FeatureText>
          These Terms of Service (the "Terms") cover your use of the services
          Loophole provides, including the Loophole.cloud website (the "Site"),
          the Loophole API, the Loophole tunneling service, the Loophole client
          software, and any other software or services offered by Loophole in
          connection with any of the above services (the "Loophole Services" or
          the "Services"). "Loophole" means the owner and operator of the
          Loophole Services which distributes the Loophole software and
          services.
          <br /> <br />
          Your access to and use of the Service is conditioned upon your
          acceptance of and compliance with these Terms. These Terms apply to
          all visitors, users, and others who wish to access or use the Service.
          <br />
          <br />
          By accessing or using the Service you agree to be bound by these
          Terms. If you disagree with any part of the terms then you do not have
          permission to access the Service.
        </FeatureText>
      </FeatureItem>
      <FeatureItem>
        <FeatureTitle>Accounts</FeatureTitle>
        <FeatureText>
          Loophole Services are available only if you register and create an
          account with Loophole. When you create an account with us, you
          guarantee that you are above the age of 18 and that the information
          you provide us is accurate, complete, and current at all times.
          Inaccurate, incomplete, or obsolete information may result in the
          immediate termination of your account on the Service. You are
          responsible for maintaining the security of your account, your
          passwords, and auth tokens; and you are fully responsible for all
          activities that occur under the account and any other actions taken in
          connection with the account. You must notify us immediately upon
          becoming aware of any breach of security or unauthorized use of your
          account.
          <br />
          <br />
          Loophole will not be liable for any acts or omissions by you,
          including any damages of any kind incurred as a result of such acts or
          omissions. The personal information you provide to Loophole for the
          purpose of creating and maintaining your account is governed by the
          Loophole Privacy Policy.
        </FeatureText>
      </FeatureItem>
      <FeatureItem>
        <FeatureTitle>Trademarks</FeatureTitle>
        <FeatureText>
          Loophole, and any other product or service name or slogan contained in
          the Site are trademarks of Loophole and its suppliers or licensors
          (unless otherwise indicated), and may not be copied, imitated or used,
          in whole or in part, without the prior written permission of Loophole
          or the applicable trademark holder. The Service is protected by
          copyright, trademark, and other laws of both Germany and foreign
          countries. Run multiple tunnels simultaneously with a single loophole
          client.
        </FeatureText>
      </FeatureItem>
      <FeatureItem>
        <FeatureTitle>Links To Other Web Sites</FeatureTitle>
        <FeatureText>
          Loophole may use data provided by third parties in the content on the
          Site and in the Services and may provide links to web pages and
          content of third parties (collectively the "Third Party Content") as a
          service to those interested in this information. Loophole does not
          monitor or have any control over any Third Party Content or third
          party web sites. You acknowledge and agree that Loophole shall not be
          responsible or liable, directly or indirectly, for any damage or loss
          caused or alleged to be caused by or in connection with use of or
          reliance on any such content, goods or services available on or
          through any such third-party web sites or services. <br />
          <br />
          We strongly advise you to read the terms and conditions and privacy
          policies of any third party web sites or services that you visit.
        </FeatureText>
      </FeatureItem>
      <FeatureItem>
        <FeatureTitle>Acceptable Use</FeatureTitle>
        <FeatureText>
          You agree that any of the below activities are considered prohibited
          usage and will result in immediate account suspension or cancellation
          without a refund and the possibility that Loophole will impose fees;
          and/or pursue civil remedies without providing advance notice. We may
          terminate or suspend your account and bar access to the Service
          immediately, without prior notice or liability, under our sole
          discretion, for any reason whatsoever and without limitation,
          including but not limited to a breach of the Terms. If you wish to
          terminate your account, you may simply discontinue using the Service.
          All provisions of the Terms which by their nature should survive
          termination shall survive termination, including, without limitation,
          ownership provisions, warranty disclaimers, indemnity and limitations
          of liability.
        </FeatureText>
      </FeatureItem>
      <FeatureItem>
        <FeatureTitle>Fees and Payment</FeatureTitle>
        <FeatureText>
          Some Services are provided on a fee basis. You agree to pay Loophole
          the fees for each Service you purchase or use in accordance with the
          pricing and payment terms presented to you for such Service. You
          hereby authorize to charge your credit card on a monthly, annual, or
          another agreed-upon basis, as set forth in the pricing and payment
          terms presented to you for such Service, in advance of providing the
          Services. The Services may be interrupted on accounts that reach 5
          days past due. Fees paid by you are non-refundable, except as provided
          in these Terms or when required by law. Loophole is not responsible
          for any additional bank fees, interest charges, finance charges,
          overdraft charges, or other fees resulting from charges billed by
          Loophole. Currency exchange settlements will be based on agreements
          between you and the provider of your credit card.
        </FeatureText>
      </FeatureItem>
      <FeatureItem>
        <FeatureTitle>Fee Changes</FeatureTitle>
        <FeatureText>
          Loophole, in its sole discretion and at any time, may modify the
          Subscription fees for the Subscriptions. Any Subscription fee change
          will become effective at the end of the then-current Billing Cycle.
          Loophole will provide you with reasonable prior notice of any change
          in Subscription fees to give you an opportunity to terminate your
          Subscription before such change becomes effective.Your continued use
          of the Service after the Subscription fee change comes into effect
          constitutes your agreement to pay the modified Subscription fee
          amount.
        </FeatureText>
      </FeatureItem>

      <FeatureItem>
        <FeatureTitle>LIMITATION OF LIABILITY</FeatureTitle>
        <FeatureText>
          In no event shall Loophole, nor its directors, employees, partners,
          agents, suppliers, or affiliates, be liable for any indirect,
          incidental, special, consequential or punitive damages, including
          without limitation, loss of profits, data, use, goodwill, or other
          intangible losses, resulting from (i) your access to or use of or
          inability to access or use the Service; (ii) any conduct or content of
          any third party on the Service; (iii) any content obtained from the
          Service; and (iv) unauthorized access, use or alteration of your
          transmissions or content, whether based on warranty, contract, tort
          (including negligence) or any other legal theory, whether or not we
          have been informed of the possibility of such damage, and even if a
          remedy set forth herein is found to have failed of its essential
          purpose.
        </FeatureText>
      </FeatureItem>

      <FeatureItem>
        <FeatureTitle>General Representation and Warranty</FeatureTitle>
        <FeatureText>
          You represent and warrant that your use of the Loophole website and
          Services will be in strict accordance with the Loophole Privacy
          Policy, with this Agreement and with all applicable laws and
          regulations (including without limitation any local laws or
          regulations in your country, state, city, or other governmental areas,
          regarding online conduct and acceptable content, and including all
          applicable laws regarding the transmission of technical data exported
          from the Germany or the country in which you reside).
        </FeatureText>
      </FeatureItem>

      <FeatureItem>
        <FeatureTitle>INDEMNIFICATION</FeatureTitle>
        <FeatureText>
          YOU AGREE TO DEFEND, HOLD HARMLESS AND INDEMNIFY Loophole, AND ITS
          SUBSIDIARIES, AFFILIATES, OFFICERS, AGENTS, EMPLOYEES, ADVERTISERS,
          LICENSORS, SUPPLIERS OR PARTNERS FROM AND AGAINST ANY THIRD PARTY
          CLAIM ARISING FROM OR IN ANY WAY RELATED TO (A) YOUR BREACH OF THE
          TERMS, (B) YOUR USE OF THE SERVICES, (C) YOUR VIOLATION OF APPLICABLE
          LAWS, RULES OR REGULATIONS IN CONNECTION WITH THE SERVICES, OR (D)
          CONTENT MADE AVAILABLE OVER YOUR TUNNELS, INCLUDING ANY LIABILITY OR
          EXPENSE ARISING FROM ANY CLAIMS, LOSSES, DAMAGES (ACTUAL AND
          CONSEQUENTIAL), SUITS, JUDGMENTS, LITIGATION COSTS AND ATTORNEYS'
          FEES, OF EVERY KIND AND NATURE. IN SUCH A CASE, Loophole WILL PROVIDE
          YOU WITH WRITTEN NOTICE OF SUCH CLAIM, SUIT OR ACTION.
        </FeatureText>
      </FeatureItem>

      <FeatureItem>
        <FeatureTitle>Notice</FeatureTitle>
        <FeatureText>
          You agree that Loophole may provide you with notices, including those
          regarding changes to the Terms, by email, regular mail, or postings on
          the Loophole website.
        </FeatureText>
      </FeatureItem>

      <FeatureItem>
        <FeatureTitle>Entire Agreement</FeatureTitle>
        <FeatureText>
          The Terms (including any policies, guidelines or amendments that may
          be presented to you from time to time) constitute the entire agreement
          between you and Loophole and govern your use of the Loophole Services,
          superseding any prior agreements between you and Loophole for the use
          of the Loophole Services.
        </FeatureText>
      </FeatureItem>

      <FeatureItem>
        <FeatureTitle>Waiver and Severability of Terms</FeatureTitle>
        <FeatureText>
          The failure of Loophole to exercise or enforce any right or provision
          of the Terms shall not constitute a waiver of such right or provision.
          If any provision of the Terms is found by a court of ct.vision, and
          the other provisions of the Terms remain in full force and effect.
        </FeatureText>
      </FeatureItem>

      <FeatureItem>
        <FeatureTitle>Governing Law</FeatureTitle>
        <FeatureText>
          These Terms shall be governed and construed in accordance with the
          laws of Germany, without regard to its conflict of law provisions. Our
          failure to enforce any right or provision of these Terms will not be
          considered a waiver of those rights. If any provision of these Terms
          is held to be invalid or unenforceable by a court, the remaining
          provisions of these Terms will remain in effect. These Terms
          constitute the entire agreement between us regarding our Service, and
          supersede and replace any prior agreements we might have had between
          us regarding the Service.
        </FeatureText>
      </FeatureItem>
      <FeatureItem>
        <FeatureTitle>Changes</FeatureTitle>
        <FeatureText>
          We reserve the right, at our sole discretion, to modify or replace
          these Terms at any time. If a revision is a material we will provide
          at least seven (7) days' notice before the changes take effect, during
          which period of time you may reject the changes by terminating your
          account. What constitutes a material change will be determined at our
          sole discretion. By continuing to access or use our Service after any
          revisions become effective, you agree to be bound by the revised
          terms. If you do not agree to the new terms, you are no longer
          authorized to use the Service.We may terminate or suspend access to
          the Services immediately, without prior notice or liability (other
          than refunding pre-paid fees to the extent we terminate based on no
          action or omission on your part), for any reason whatsoever,
          including, but not limited to, if you breach any of the Terms. All
          provisions of the Terms which, by their nature, should survive
          termination shall survive termination, including, without limitation,
          ownership provisions, warranty disclaimers, indemnifications, and
          limitations of liability.
        </FeatureText>
      </FeatureItem>

      <FeatureItem>
        <FeatureTitle>Contact Us</FeatureTitle>
        <FeatureText>
          If you have any questions about these Terms, please contact us at{" "}
          <a href="mailto: loophole@main.dev">loophole@main.dev</a>.
        </FeatureText>
      </FeatureItem>
    </StyledContainer>
  </Section>
);

export default Features;

const StyledContainer = styled(Container)``;

const SectionTitle = styled.h3`
  color: ${(props) => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`;

const FeatureItem = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  flex-direction: column;
`;

const FeatureTitle = styled.h4`
  color: ${(props) => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
  text-align: left;
`;

const FeatureText = styled.p`
  text-align: left;
`;
