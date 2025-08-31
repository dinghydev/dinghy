import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BITBUCKET = {
  _style:
    'image;image=img/lib/atlassian/Bitbucket_Logo.svg;html=1;strokeColor=none;',
  _width: 57,
  _height: 50,
}

export function Bitbucket(props: DiagramNodeProps) {
  return (
    <Shape {...BITBUCKET} {...props} _style={extendStyle(BITBUCKET, props)} />
  )
}
