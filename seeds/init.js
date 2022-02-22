const {
  AREA_SCHEMA_NAME
} = require('../constants')

exports.seed = async function (knex) {
  await knex(`${AREA_SCHEMA_NAME}.category`).insert([
    { id: 'faa', name: 'Flood alert area' },
    { id: 'fwa', name: 'Flood warning area' }
  ])

  await knex(`${AREA_SCHEMA_NAME}.type`).insert([
    { id: 'c', name: 'Coastal' },
    { id: 't', name: 'Tidal' },
    { id: 'f', name: 'Fluvial' },
    { id: 'b', name: 'Both (Tidal and Fluvial)' },
    { id: 'g', name: 'Groundwater' }
  ])

  await knex(`${AREA_SCHEMA_NAME}.ea_area`).insert([
    { id: 'HNL', name: 'Herts and North London', full_name: 'Hertfordshire and North London', group: 'South East' },
    { id: 'LNA', name: 'Lincs and Northants', full_name: 'Lincolnshire and Northamptonshire', group: 'West and Central' },
    { id: 'DCS', name: 'Devon and Cornwall', full_name: 'Devon, Cornwall and the Isles of Scilly', group: 'West and Central' },
    { id: 'WMD', name: 'West Midlands', full_name: 'West Midlands', group: 'West and Central' },
    { id: 'EMD', name: 'East Midlands', full_name: 'East Midlands', group: 'West and Central' },
    { id: 'EAN', name: 'East Anglia', full_name: 'East Anglia', group: 'South East' },
    { id: 'KSL', name: 'Kent S London and E Sussex', full_name: 'Kent, South London and East Sussex', group: 'South East' },
    { id: 'NEA', name: 'North East', full_name: 'North East', group: 'North' },
    { id: 'YOR', name: 'Yorkshire', full_name: 'Yorkshire', group: 'North' },
    { id: 'SSD', name: 'Solent and South Downs', full_name: 'Solent and South Downs', group: 'South East' },
    { id: 'GMC', name: 'Gtr Mancs Mersey and Ches', full_name: 'Greater Manchester, Merseyside and Cheshire', group: 'North' },
    { id: 'WSX', name: 'Wessex', full_name: 'Wessex', group: 'West and Central' },
    { id: 'CLA', name: 'Cumbria and Lancashire', full_name: 'Cumbria and Lancashire', group: 'North' },
    { id: 'THM', name: 'Thames', full_name: 'Thames', group: 'South East' }
  ])

  await knex(`${AREA_SCHEMA_NAME}.ea_owner`).insert([
    { id: '011', name: 'Cumbria and Lancashire - Cumbria', ea_area_id: 'CLA' },
    { id: '012', name: 'Cumbria and Lancashire - Lancashire', ea_area_id: 'CLA' },
    { id: '114', name: 'Devon and Cornwall - Cornwall and IOS', ea_area_id: 'DCS' },
    { id: '113', name: 'Devon and Cornwall - Devon', ea_area_id: 'DCS' },
    { id: '052', name: 'East Anglia - Cambridgeshire and Bedfordshire', ea_area_id: 'EAN' },
    { id: '051', name: 'East Anglia - Essex, Norfolk and Suffolk', ea_area_id: 'EAN' },
    { id: '054', name: 'East Anglia - Essex, Norfolk and Suffolk', ea_area_id: 'EAN' },
    { id: '034', name: 'East Midlands', ea_area_id: 'EMD' },
    { id: '013', name: 'Gtr Mancs Mersey and Ches', ea_area_id: 'GMC' },
    { id: '062', name: 'Herts and North London', ea_area_id: 'HNL' },
    { id: '063', name: 'Kent S London and E Sussex', ea_area_id: 'KSL' },
    { id: '064', name: 'Kent S London and E Sussex', ea_area_id: 'KSL' },
    { id: '053', name: 'Lincs and Northants', ea_area_id: 'LNA' },
    { id: '055', name: 'Lincs and Northants', ea_area_id: 'LNA' },
    { id: '121', name: 'North East', ea_area_id: 'NEA' },
    // { id: '101', name: 'NRW Northern', ea_area_id:  },
    // { id: '103', name: 'NRW South East', ea_area_id:  },
    // { id: '102', name: 'NRW South West', ea_area_id:  },
    { id: '065', name: 'Solent and South Downs', ea_area_id: 'SSD' },
    { id: '061', name: 'Thames', ea_area_id: 'THM' },
    { id: '112', name: 'Wessex - North', ea_area_id: 'WSX' },
    { id: '111', name: 'Wessex - South', ea_area_id: 'WSX' },
    { id: '033', name: 'West Midlands - East', ea_area_id: 'WMD' },
    { id: '031', name: 'West Midlands - West', ea_area_id: 'WMD' },
    { id: '122', name: 'Yorkshire - North and East', ea_area_id: 'YOR' },
    { id: '123', name: 'Yorkshire - South and West', ea_area_id: 'YOR' }
  ])
}
