import React from 'react';
import { TotalCountProps } from '../../../assets/TsType/TypeScriptTypes';


export default function TotalCount({ countName, countIcon, countBgIcon, countTotal, countBg }: TotalCountProps) {
    return (
        <div className='countContainer p-3 rounded position-relative' style={{ background: countBg }}>
            <div className="row">
                <div className="col-8">
                    <h4 className='fw-semibold text-white'>{countName}</h4>
                    <div className="countBgIcon">
                        {countBgIcon}
                    </div>
                </div>
                <div className="col-4">
                    <div className="float-end countIcon text-white">
                        {countIcon}
                    </div>
                </div>
                <div className="col-12">
                    <h6 className='fw-semibold text-white position-absolute countTotal'>Total ({countTotal})</h6>
                </div>
            </div>
        </div>
    )
}
