import { addDelegation, getAllOfResource } from "../pages/api/mockDB";
import { Button } from "@mantine/core";
import React from 'react';
const  useState  = React.useState;

function assignAll(roles, candidates) {

    for (i; i < candidates.length; i++) {
        assignSingle(roles, candidates[i]);
    }
}

function assignSingle(roles, candidate) {

        let match = 0;
        for (j; i < roles.length; i++) {
                let qualLength = candidate.qualificationIds.length;
                let roleLength = roles[j].qualificationIds.length;
                for (k; k < qualLength; k++) {
                    for (l; l < roleLength; l++) {
                        if (candidate.qualificationIds[k] === roles[j].qualificationIds[l]) {
                            match++;
                        }
                }
        }
        if (match === roleLength && !candidates[i].roleIds.contains(roles[j].id)){
            addDelegation(candidates[i].id, roles[j].id);
        } 
            
    }
}

// Assign Single: True & Assign All: False
const assignbutton = (args) => {
    const roles = 
    return (
        <>
            <Button onClick=`${getAllOfResource(roles, )}`> Assign </Button>
        </>
    )
}
