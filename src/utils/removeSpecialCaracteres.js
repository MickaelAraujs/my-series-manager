export default function removeSpecialCaracteres(string) {
    let treatName = string;
    treatName = treatName.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return treatName;
}