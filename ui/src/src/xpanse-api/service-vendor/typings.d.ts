declare namespace ServiceVendor {
    interface ServiceData {
        data: Service[];
    }

    interface Service {
        name: string;
        versionList: Version[];
    }

    interface Version {
        version: string;
        cloudProviderList: CloudProvider[];
    }

    interface CloudProvider {
        region: string[];
        name: string;
        details: CloudProviderDetails;
    }

    interface CloudProviderDetails {
        category?: string;
        provider?: string;
        serviceVersion?: string;
        billingMode?: string;
        regularPricing?: string;
        registerTime?: string;
        updateTime?: string;
        status?: string;
        flavors?: string;
    }

    interface CategoryList {
        data: [];
    }
}
