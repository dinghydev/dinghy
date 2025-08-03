import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEVICES_GROUPS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Devices_Groups.svg;strokeColor=none;',
  _width: 50,
  _height: 50,
}

export function DevicesGroups(props: DiagramNodeProps) {
  return <Shape {...DEVICES_GROUPS} {...props} />
}
