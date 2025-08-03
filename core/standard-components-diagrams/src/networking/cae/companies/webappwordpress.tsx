import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WEBAPPWORDPRESS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/WebAppWordPress.svg;strokeColor=none;',
  _width: 49,
  _height: 50,
}

export function Webappwordpress(props: DiagramNodeProps) {
  return <Shape {...WEBAPPWORDPRESS} {...props} />
}
