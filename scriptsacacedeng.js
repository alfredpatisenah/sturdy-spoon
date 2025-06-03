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

    const totalReactions = reactions + pipettingErrorFactor;

    const amplificationMixVolume = totalReactions * amplificationMixVolumePerReaction;
    const probeMixVolume = totalReactions * probeMixVolumePerReaction;
    const totalVolume = amplificationMixVolume + probeMixVolume;

    const positiveControls = 4;
    const negativeControls = 1;
    const samples = reactions - positiveControls - negativeControls;

    document.getElementById('amplification-mix').textContent = `${amplificationMixVolume.toFixed(2)} uL`;
    document.getElementById('probe-mix').textContent = `${probeMixVolume.toFixed(2)} uL`;
    document.getElementById('total-volume').textContent = `${totalVolume.toFixed(2)} uL`;
    document.getElementById('distribution').textContent = `${positiveControls} positive controls, ${negativeControls} negative controls, ${samples} samples`;
});
