import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FOLDERS = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.folders',
  },
  _width: 100,
  _height: 85,
}

export function Folders(props: DiagramNodeProps) {
  return <Shape {...FOLDERS} {...props} _style={extendStyle(FOLDERS, props)} />
}
