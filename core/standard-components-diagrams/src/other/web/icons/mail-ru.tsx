import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MAIL_RU = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.mail.ru;fillColor=#267BE0;gradientColor=#0A1F42',
  _width: 102.4,
  _height: 102.4,
}

export function MailRu(props: DiagramNodeProps) {
  return <Shape {...MAIL_RU} {...props} />
}
