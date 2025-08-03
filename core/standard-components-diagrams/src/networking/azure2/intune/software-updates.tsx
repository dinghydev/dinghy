import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SOFTWARE_UPDATES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/intune/Software_Updates.svg;strokeColor=none;',
  _width: 68,
  _height: 60,
}

export function SoftwareUpdates(props: DiagramNodeProps) {
  return <Shape {...SOFTWARE_UPDATES} {...props} />
}
