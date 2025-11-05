import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VOLUME_CONTROL = {
  _style: {
    entity:
      'shape=rect;strokeColor=none;fillColor=none;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;',
  },
  _width: 160,
  _height: 14,
}

export function VolumeControl(props: NodeProps) {
  return (
    <Shape
      {...VOLUME_CONTROL}
      {...props}
      _style={extendStyle(VOLUME_CONTROL, props)}
    />
  )
}
