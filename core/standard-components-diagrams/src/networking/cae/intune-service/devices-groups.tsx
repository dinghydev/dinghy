import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEVICES_GROUPS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Devices_Groups.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function DevicesGroups(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEVICES_GROUPS}
      {...props}
      _style={extendStyle(DEVICES_GROUPS, props)}
    />
  )
}
