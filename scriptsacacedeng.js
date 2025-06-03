document.getElementById('decrease').addEventListener('click', function() {
    const reactionsInput = document.getElementById('reactions');
    let reactions = parseInt(reactionsInput.value);
    if (reactions > 4) {
        reactionsInput.value = reactions - 1;
    }
});

document.getElementById('increase').addEventListener('click', function() {
    const reactionsInput = document.getElementById('reactions');
    let reactions = parseInt(reactionsInput.value);
    reactionsInput.value = reactions + 1;
});

document.getElementById('pcr-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const reactions = parseInt(document.getElementById('reactions').value);
    
    if (reactions < 4) {
        alert("The number of reactions must be at least 6.");
        return;
    }
    
    const DV = 12.5; // uL
    const TM = 6.25; // uL
    const G = 0.3125; // uL
    const Pol = 0.625; //uL
    const R = 0.3125; //uL

    const totalReactions = reactions + 1;

    const DV_vol = totalReactions * DV;
    const TM_vol = totalReactions * TM;
    const G_vol = totalReactions * G;
    const Pol_vol = totalReactions * Pol;
    const R_vol = totalReactions * R;
    const totalVolume = DV_vol + TM_vol + G_vol + Pol_vol + R_vol;

    const positiveControls = 1;
    const negativeControls = 2;
    const samples = reactions - positiveControls - negativeControls;

    document.getElementById('DV_vol').textContent = `${DV_vol.toFixed(4)} uL`;
    document.getElementById('TM_vol').textContent = `${TM_vol.toFixed(4)} uL`;
    document.getElementById('G_vol').textContent = `${G_vol.toFixed(4)} uL`;
    document.getElementById('Pol_vol').textContent = `${Pol_vol.toFixed(4)} uL`;
    document.getElementById('R_vol').textContent = `${R_vol.toFixed(4)} uL`;
    document.getElementById('total-volume').textContent = `${totalVolume.toFixed(4)} uL`;
    document.getElementById('distribution').textContent = `${positiveControls} positive controls, ${negativeControls} negative controls, ${samples} samples`;
});
