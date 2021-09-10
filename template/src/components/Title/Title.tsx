import { FC } from 'react'

export const Title: FC<ITitle> = ({ color, children }) => {
  return <h3 style={{ color }}>{children}</h3>
}
