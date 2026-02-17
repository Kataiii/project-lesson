import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { MAIN_URL } from "../types/consts/routing";
import Button from "../components/Button/Button";
import Modal from "../components/Modal/Modal";

export const Auth: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login?.(email, password);
      navigate(MAIN_URL);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Введите почту"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Введите пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button
          type="submit"
          size="medium"
          variant="primary"
          text="Войти"
          onClick={() => console.log("Данные успешно отправлены")}
        />
      </form>
      <Button
        type="submit"
        size="medium"
        variant="primary"
        text="Открыть модальное окно"
        onClick={() => setIsOpen(true)}
      />
      <Modal type="sidepanel" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>Текст</p>
      </Modal>
    </>
  );
};
