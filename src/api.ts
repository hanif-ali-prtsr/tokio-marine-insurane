class ProtosureURLBuilder{
  
}
class ProtosureAPI {
  private host: string;
  private tenantId: string;

  constructor(host: string, tenantId: string) {
    this.host = host;
    this.tenantId = tenantId;
  }
}

export class QuoteUrls {
  quoteId?: string;
  policyId?: string;
  formTemplateId?: string;

  constructor(public host: string, public tenantId: string) {}

  // @formatter:off
  get apiUrl() {
    return `${this.host}/public-api/${this.tenantId}`;
  }
  get getOrCreateQuoteUrl() {
    return `${this.apiUrl}/quotes/get_or_create/`;
  }
  get quoteUrl() {
    return `${this.apiUrl}/quotes/${this.quoteId}`;
  }
  get updateQuoteInputDataUrl() {
    return `${this.quoteUrl}/update_input_data/`;
  }
  get clearUrl() {
    return `${this.quoteUrl}/clear_input_data/`;
  }
  get quoteErrorsUrl() {
    return `${this.quoteUrl}/quote_errors/`;
  }
  get quoteUWErrorsUrl() {
    return `${this.quoteUrl}/quote_uw_errors/`;
  }
  get calculateUrl() {
    return `${this.quoteUrl}/calculate_rater/`;
  }
  get submitUrl() {
    return `${this.quoteUrl}/submit/`;
  }
  get policyUrl() {
    return `${this.apiUrl}/policies/${this.policyId}/`;
  }
  get formTemplateUrl() {
    return `${this.apiUrl}/form-templates/${this.formTemplateId}/`;
  }
  get documentSetsUrl() {
    return `${this.apiUrl}/document-sets/for_policy/?policyId=${this.policyId}`;
  }
  documentSetRenderUrl(documentSetId: string) {
    return `${this.apiUrl}/document-sets/${documentSetId}/render/?policyId=${this.policyId}`;
  }
  lookupJapanesePostCodeUrl(postCode: string) {
    return `${this.apiUrl}/widgets/wjapaneseaddress/lookup/?postalCode=${postCode}`;
  }
}

export const req = (method: string, url: string, data?: any) =>
  fetch(url, {
    cache: "no-cache",
    credentials: "include",
    headers: { "Content-Type": "application/json", "X-PRTSR-lang": "ja" },
    method,
    body: JSON.stringify(data),
  });
