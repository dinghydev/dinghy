import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BROWSER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Browser.svg;',
  _width: 65,
  _height: 52,
}

export function Browser(props: DiagramNodeProps) {
  return <Shape {...BROWSER} {...props} />
}
