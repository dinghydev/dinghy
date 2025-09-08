import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LABELS = {
  _style: {
    entity: 'shape=rect;fillColor=#F6F6F8;strokeColor=none;',
  },
  _original_width: 0,
  _original_height: 20,
}

export function Labels(props: DiagramNodeProps) {
  return <Shape {...LABELS} {...props} _style={extendStyle(LABELS, props)} />
}
