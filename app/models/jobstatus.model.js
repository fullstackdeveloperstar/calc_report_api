/**
 * Copyright by Felipe Mantilla Gomez
 */

 module.exports = (sequelize, Sequelize) => {
    const JobStatus = sequelize.define('jobstatus', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        job_status: {
            type: Sequelize.STRING
        }
    });

    return JobStatus;
}