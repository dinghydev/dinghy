import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GALLERY = {
  _style: {
    entity:
      'html=1;dashed=0;aspect=fixed;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.gallery;strokeColor=none;fillColor=#737373;shadow=0;sketch=0;',
  },
  _width: 24,
  _height: 22,
}

export function Gallery(props: DiagramNodeProps) {
  return <Shape {...GALLERY} {...props} _style={extendStyle(GALLERY, props)} />
}
