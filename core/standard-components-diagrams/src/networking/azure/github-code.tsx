import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GITHUB_CODE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.github_code;pointerEvents=1;',
  _width: 60,
  _height: 60,
}

export function GithubCode(props: DiagramNodeProps) {
  return (
    <Shape
      {...GITHUB_CODE}
      {...props}
      _style={extendStyle(GITHUB_CODE, props)}
    />
  )
}
