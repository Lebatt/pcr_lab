export interface CreateUploadResultDto {
    tenant:	'TESTTERMIN' | 'TESTKALENDER' | 'WIRTESTENUNS' |
            'ANMELDUNGTESTZENTRUM' | 'TESTTERMIN24' | 'LOCALHOST' |
            'TESTTERMINCH' | 'CLINIGO';
    result:	'0' | '1' | '2' | 'INV' | 'NEG' | 'POS';
    ctValue:	string;
    virusN1:	string;
    virusN2:	string;
    rNaseP:	string;
    cwaGuId:	string;
    tubeId:	string;
    resultTime:	string;
}

export interface uploadResults {
    token: string;
    pcr_lab_id: string;
    results: CreateUploadResultDto[];
}

export interface ResUploadResults {
    token: string;
    tubeId: string;
}