import React from "react";
import { styled, css } from "styled-components";

type ButtonVariant = "primary" | "secondary" | "danger";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  text: string;
  type?: string;
  onClick: () => void;
}

type ButtonPropsForCSS = Omit<ButtonProps, "text">;

const BaseButton = styled.button<ButtonPropsForCSS>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 12px;

  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          padding: 6px 12px;
          font-size: 12px;
        `;
      case "medium":
        return css`
          padding: 8px 16px;
          font-size: 14px;
        `;
      case "large":
        return css`
          padding: 12px 20px;
          font-size: 18px;
        `;
    }
  }}

  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return css`
          background-color: var(--color-primary);
          color: var(--color-text);

          &:hover:not(:disabled) {
            background-color: var(--color-text);
            background-color: #000000;
          }
        `;
      case "secondary":
        return css`
          background-color: var(--color-primary);
          color: var(--color-text);

          &:hover:not(:disabled) {
            background-color: var(--color-text);
            background-color: #000000;
          }
        `;
      case "danger":
        return css`
          background-color: var(--color-primary);
          color: var(--color-text);

          &:hover:not(:disabled) {
            background-color: var(--color-text);
            background-color: #000000;
          }
        `;
    }
  }}

    &:disabled {
    cursor: not-allowed;
  }
`;

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "small",
  fullWidth,
  text,
  type,
  onClick,
}) => {
  return (
    <BaseButton
      type={type}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      onClick={onClick}
    >
      {text}
    </BaseButton>
  );
};

export default Button;
