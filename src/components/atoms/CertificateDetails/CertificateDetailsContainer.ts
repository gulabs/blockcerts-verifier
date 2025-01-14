import connector from '../../../store/connector';
import CertificateDetails, { ICertificateDetailsApi } from './CertificateDetails';
import {
  getChain,
  getIssueDate,
  getIssuedOn,
  getIssuerName, getIssuerProfileDomain, getIssuerProfileUrl,
  getIssuerPublicKey,
  getRecipientName, getSignatureSuiteType,
  getTransactionId
} from '../../../selectors/certificate';
import { BlockcertsVerifierState } from '../../../store/getInitialState';

export const mapStateToProps = (state: BlockcertsVerifierState): ICertificateDetailsApi => ({
  recipientName: getRecipientName(state),
  issueDate: getIssueDate(state),
  issuedOn: getIssuedOn(state),
  issuerName: getIssuerName(state),
  transactionId: getTransactionId(state),
  issuerPublicKey: getIssuerPublicKey(state),
  issuerProfileDomain: getIssuerProfileDomain(state),
  issuerProfileUrl: getIssuerProfileUrl(state),
  signatureSuiteType: getSignatureSuiteType(state),
  chain: getChain(state)
});

const ownProps = {
  direction: String,
  hideRecipientName: Boolean
};

const CertificateDetailsContainer = connector(CertificateDetails, { mapStateToProps, ownProps });
export default CertificateDetailsContainer;
