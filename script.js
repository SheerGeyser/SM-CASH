document.getElementById('addPenalty').addEventListener('click', function() {
    const penaltyDiv = document.createElement('div');
    penaltyDiv.className = 'penalty';
    const penaltyInput = document.createElement('input');
    penaltyInput.type = 'number';
    penaltyInput.className = 'penalty-input';
    penaltyInput.value = 0;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Удалить';
    removeButton.addEventListener('click', function() {
        penaltyDiv.remove();
    });

    penaltyDiv.appendChild(penaltyInput);
    penaltyDiv.appendChild(removeButton);
    document.getElementById('penalties').appendChild(penaltyDiv);
});

document.getElementById('calculate').addEventListener('click', function() {
    const cash = parseFloat(document.getElementById('cash').value) || 0;
    const advance = parseFloat(document.getElementById('advance').value) || 0;
    const card = parseFloat(document.getElementById('card').value) || 0;
    const badge = parseFloat(document.getElementById('badge').value) || 0;

    let totalPenalties = 0;
    document.querySelectorAll('.penalty-input').forEach(function(input) {
        totalPenalties += parseFloat(input.value) || 0;
    });

    const totalSalary = cash + advance + card - badge - totalPenalties;
    document.getElementById('totalSalary').textContent = totalSalary;
});
