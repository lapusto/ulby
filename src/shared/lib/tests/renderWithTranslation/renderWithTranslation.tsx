import { render } from '@testing-library/react';
import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';

export function renderWithTranslation(comp: ReactNode) {
    return render(
        <I18nextProvider i18next={i18nForTests}>
            {comp}
        </I18nextProvider>,
    );
}
