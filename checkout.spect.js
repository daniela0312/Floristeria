import {test, expect} from '@playwright/test';
import { BuyPage, BuyPage } from '../Pages/BuyPage';
import test from 'node:test';

test('completar formulario de compra', async({page})=>{
    const BuyPage = new BuyPage (page);
    
    await page.goto('/checkout');

    await buyPage.fillOutTheForm({
        firstName: 'Daniela',
        lastName: 'Fabra',
        documentId: '123456789',
        phone: '3001234567',
        email: 'daniela@example.com',
        fullNameCard: 'Daniela Fabra',
        city: 'bogota', 
        address: 'Calle 123',
        additionalAddress: 'Apto 4B',
        mobile: '3001234567',
        message: 'Por favor entregar en la mañana',
        cardSignature: 'Con amor, Daniela',
        deliveryDate: '2025-04-09',
        deliveryHour: '09:00', 
        cardMessage: 'Feliz cumpleaños '
      });
    });