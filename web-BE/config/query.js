module.exports = {
  // label
  insertLabel: 'INSERT INTO Label (name,description,color) VALUE(?,?,?);',
  selectLabel: 'SELECT * FROM Label',
  updateLabel:
    'UPDATE Label SET name=?, description=?, color=?, WHERE label_id=?;',
  deleteLabel: 'DELETE FROM Label WHERE label_id=?;',
  // milestone
  insertMilestone:
    'INSERT INTO Milestone (title,due_date,content) VALUES (?,?,?);',
  selectMilestone: 'SELECT * FROM Milestone;',
  updateMilestone:
    'UPDATE Milestone SET title=?, due_date=?, content=? WHERE milestone_id=?;',
  deleteMilestone: 'DELETE FROM Milestone WHERE milestone_id=?;',
};
