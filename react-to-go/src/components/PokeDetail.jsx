import React from 'react';
import {useParams} from "react-router-dom";

const PokeDetail = () => {
    const params = useParams();
    return (
        <div>
            This is PokeDetail component {params.id ? `with ID: ${params.id}` : "without ID"}
        </div>
    );
};

export default PokeDetail;