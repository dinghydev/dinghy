import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CRUCIBLE = {
  _style:
    'image;image=img/lib/atlassian/Crucible_Logo.svg;html=1;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function Crucible(props: DiagramNodeProps) {
  return (
    <Shape {...CRUCIBLE} {...props} _style={extendStyle(CRUCIBLE, props)} />
  )
}
