import { useFunnel } from "./useFunnel";
import { screen, render } from '@testing-library/react';
import React from "react";

const COMPONENT_LIST = ['Funnel1', 'Funnel2'];


describe('useFunnel', () => {
    it('Funnel 컴포넌트 렌더링 확인', async () => {
        const [FunnelComponent] = useFunnel(COMPONENT_LIST);

        render(
            <div>
            </div>
        );
        expect(await screen.findByText('Funnel1')).toBeTruthy();
    })

})