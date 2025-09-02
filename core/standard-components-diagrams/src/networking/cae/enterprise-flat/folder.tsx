import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FOLDER = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.folder',
  },
  _original_width: 50,
  _original_height: 43,
}

export function Folder(props: DiagramNodeProps) {
  return <Shape {...FOLDER} {...props} _style={extendStyle(FOLDER, props)} />
}
