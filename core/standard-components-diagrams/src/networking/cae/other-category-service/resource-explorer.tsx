import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RESOURCE_EXPLORER = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Resource_Explorer.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 46,
}

export function ResourceExplorer(props: DiagramNodeProps) {
  return (
    <Shape
      {...RESOURCE_EXPLORER}
      {...props}
      _style={extendStyle(RESOURCE_EXPLORER, props)}
    />
  )
}
