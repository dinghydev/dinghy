import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FILES = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.files',
  },
  _original_width: 100,
  _original_height: 97,
}

export function Files(props: DiagramNodeProps) {
  return <Shape {...FILES} {...props} _style={extendStyle(FILES, props)} />
}
