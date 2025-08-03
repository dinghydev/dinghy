import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMMIT = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Commit.svg;strokeColor=none;',
  _width: 72,
  _height: 68,
}

export function Commit(props: DiagramNodeProps) {
  return <Shape {...COMMIT} {...props} />
}
