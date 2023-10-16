const CheckDNAStrand=(dna)=>{
    const complements = {
         'A': 'T',
         'T': 'A',
         'C': 'G',
         'G': 'C'
     }
     return dna.split('').map(element =>complements[element]).join('')
 }