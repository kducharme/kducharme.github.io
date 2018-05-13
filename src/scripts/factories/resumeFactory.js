const $ = require('jquery');

const resumeFactory = (company, role, details) => {
    const $structure = $('<span>');
    $structure.addClass('resume__exp');

    const $company = $('<p>');
    $company.addClass('resume__exp--company')
    $company.text(company);

    const $role = $('<p>');
    $role.addClass('resume__exp--role')
    $role.text(role);

    const $details = $('<p>');
    $details.addClass('resume__exp--details')
    $details.text(details);

    $structure.append($role, $company, $details);

    return $structure;
}

module.exports = resumeFactory;