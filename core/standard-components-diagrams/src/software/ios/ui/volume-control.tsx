import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VOLUME_CONTROL = {
  _style:
    'shape=rect;strokeColor=none;fillColor=none;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;',
  _width: 160,
  _height: 14,
}

export function VolumeControl(props: DiagramNodeProps) {
  return (
    <Shape
      {...VOLUME_CONTROL}
      {...props}
      _style={extendStyle(VOLUME_CONTROL, props)}
    />
  )
}
