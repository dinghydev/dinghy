import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LABELS = {
  _style: {
    entity: 'shape=rect;fillColor=#F6F6F8;strokeColor=none;',
  },
  _width: 0,
  _height: 20,
}

export function Labels(props: DiagramNodeProps) {
  return <Shape {...LABELS} {...props} _style={extendStyle(LABELS, props)} />
}
