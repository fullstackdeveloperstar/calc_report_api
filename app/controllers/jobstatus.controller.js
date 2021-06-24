/**
 * Copyright by Felipe Mantilla Gomez
 */

const db = require('../config/db.config.js');
const JobStatus = db.JobStatus;
 
exports.getAll = (req, res) => {
  
    JobStatus.findAll({
        order: [
            ['id', 'ASC'],
        ],
    })
        .then(jobstatus => {
            res.status(200).json({
                message: "Get all Job Status Infos Successfully!",
                jobstatus: jobstatus
            });
        })
        .catch(error => {
            // log on console
            console.log(error);

            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}

exports.add = (req, res) => {
    let job_status = req.body.job_status;

    try {
        JobStatus.create({job_status: job_status}).then(result => {
        });
    } catch (error) {
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
    res.status(200).json({
        message: "Added Successfully!",
        jobstatus: job_status
    });
}

exports.update = (req, res) => {
    try {
        let job_status = req.body.job_status;
        let id = req.params.id;
        JobStatus.update({job_status: job_status}, {
            where: { id: id }
        })
            .then(num => {
                if(num == 1) res.send({message: 'Updated successfully.'});
                else res.send({message: 'Cannot update'});
            })
            .catch(err => {
                res.status(500).send({
                    message: 'Error updating with id = ' + id
                });
            });
            res.status(200).json({
                message: "Added Successfully!",
                jobstatus: job_status
            });
    } catch (error) {
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
    
}