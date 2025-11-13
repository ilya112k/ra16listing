import QuantityLevelEnum from "../enums/quantity-level.enum.ts";

export function detectLevel(quantity: number | undefined): QuantityLevelEnum {
    if (!quantity || quantity <= 10) {
        return QuantityLevelEnum.low;
    } else if (quantity <= 20) {
        return QuantityLevelEnum.medium;
    } else {
        return QuantityLevelEnum.high;
    }
}


export function detectTitle(title: string): string {
    if (title.length > 50) {
        return title.substring(0, 50) + '...';
    }
    return title;
}

export function detectPrice(price: string | undefined, currency: string | undefined): string {
    if (!price) {
        return  '';
    }
    switch (currency) {
        case 'USD':
            return  '$' + price;
        case 'EUR':
            return '€' + price;
        default:
            return  price + ' ' + currency;
    }
}