import React from 'react';
import './remedy_detail_container.css';
import RemedyDetailGroup from './remedy_detail_group';
import OtherTreamentsContainer from './other_treatments_container';
import Header from './header';
import dummyData from '../dummy_data/data_for_remedy_detail';

const RemedyDetailContainer = (props) => {
    console.log("props for RemedyDetailContainer:", props);
    const { remedyId } = props.match.params;
    const findRemedyDetailfromData = () => {
        for (let dummyIndex = 0; dummyIndex < dummyData.length; dummyIndex++) {
            if (dummyData[dummyIndex]._id === remedyId) {
                return dummyData[dummyIndex];
            }
        }
    };
    const remedyDetail = findRemedyDetailfromData();
    const { Herb, Remedy, Note, Caution } = remedyDetail;
    console.log("remedyDetail:", remedyDetail);
    return (
        <div className="condition-detail-container">
            <Header />
            <RemedyDetailGroup name={Herb} remedyDesc={Remedy} note={Note} caution={Caution} />
            <OtherTreamentsContainer />
        </div>
    )
}

export default RemedyDetailContainer;