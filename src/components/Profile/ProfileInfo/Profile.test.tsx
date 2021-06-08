import React from "react";
import {ProfileStatus} from "./ProfileStatus";
import {create} from "react-test-renderer";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status={'free'} updateStatus={() => {}} />);
        const instance = component.getInstance()
        // @ts-ignore
        expect(instance.state.status).toBe('free');
    });
    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status={'free'} updateStatus={() => {}} />);
        const root = component.root
        expect(root.findByType('span')).not.toBeNull();
    });
    test("after creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status={'free'} updateStatus={() => {}} />);
        const root = component.root
        expect(() => root.findByType('input')).toThrow();
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={'free'} updateStatus={mockCallback} />);
        const instance = component.getInstance()
        // @ts-ignore
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1);
    });
})