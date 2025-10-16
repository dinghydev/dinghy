import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BLOCK_STORAGE = {
  _style: {
    entity:
      'shape=rect;fillColor=#0F62FE;aspect=fixed;resizable=0;labelPosition=center;verticalLabelPosition=bottom;align=center;verticalAlign=top;strokeColor=none;fontSize=14;',
  },
  _width: 0,
  _height: 48,
}

export function BlockStorage(props: DiagramNodeProps) {
  return (
    <Shape
      {...BLOCK_STORAGE}
      {...props}
      _style={extendStyle(BLOCK_STORAGE, props)}
    />
  )
}
