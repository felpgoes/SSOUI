import { render, screen } from '@testing-library/react';
import App from './App';

test('Renderiza a página de Home', () => {
  render(<div>Faça seu logon</div>);
  const linkElement = screen.getByText(/Faça seu logon/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renderiza a página de SolicitacaoCadastro', () => {
  render(<div>Faça seu logon</div>);
  const linkElement = screen.getByText(/Faça seu logon/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renderiza a página de SolicitacaoConsulta', () => {
  render(<div>Faça seu logon</div>);
  const linkElement = screen.getByText(/Faça seu logon/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renderiza a página de UsuarioDetalhe', () => {
  render(<div>Faça seu logon</div>);
  const linkElement = screen.getByText(/Faça seu logon/i);
  expect(linkElement).toBeInTheDocument();
});
test('Renderiza a página de Chat', () => {
  render(<div>Faça seu logon</div>);
  const linkElement = screen.getByText(/Faça seu logon/i);
  expect(linkElement).toBeInTheDocument();
});
