import React, { Component } from 'react'
import Particles from 'react-particles-js';
 
export default class Particulas extends Component {
    render() {
        return (
          
            <div style={{position:"absolute",height:"100vh",width:"100vw"}} > <Particles id="particles-js"
            params={{
                "particles": {
                    "number": {
                        "value": 16,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "line_linked": {
                        "enable": false
                    },
                    "move": {
                        "speed": 2,
                        "out_mode": "out"
                    },
                    "shape": {
                        "type": [
                            "image",
                            
                        ],
                        "image": [
                            {
                            "src":"https://www.seekpng.com/png/full/148-1483679_what-is-php-xero-logo-transparent.png",                          
                            "height": 30,                                
                            "width": 30
                            },
                            {
                                "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///9Uwd5Ov91EvdxLv91BvNyL0+fW7/bC5vHj9Pn1+/36/f7r9/uV1unN6/Rnx+Fbw9+z4e+h2uuBz+XS7fV1y+O95fHe8vjo9vqs3u3A5vGe2etxyuOJ0uew3+6o3OwQ2KQbAAATS0lEQVR4nO1d2ZarKhBtAaNxNiYm6cTO///lVaCYRMVObM5dy73Ow+kMhhKocVN+fe3YsWPHjh07duzYseP/hCSK2/q7OCZvXeTavvI8P7XXTw3rU8heFcFkACZVHv9OyuhU4v4iCKHhMod/ScjkgAkKAP0A8SVOV17j9gjUi/SXCZu3lsMnUWgjYyAkv624xPmJyegaCJ83G/Mq1OFobGx8jes6K0psvUQQxpuO3BHtxOgGGS9HhwtEJR6vARDxH5jFqzKDvY4wZcyX9lLSGPIhpF4G+9+LFYyG4KC8lIa66GVsZ7/+o8vXX+R5OBzkrkSXP5JjEi8YCrln9IWs6JWiOmpcTqucW6nol95GXFr+2bSGG4U9b8WEb0JUqqvpmhNVM+L7xLdrZQsjXNXqNbKAiYiCDYfvgBOTBFWG+UvrQJGRPDPLd5MLVuR7Fsbb2b8xiTBLFp3ZKjIiYo6/V6GqPiktOjPmN8DrTizYIFBuffeuKJ3wYbz5IyeQILs2enLxbQvgr5Cj2TEkTShkJE9tIXdCwN6iTHh4Z/YZUn962CvAlUEz+YGzXKookEs5kTqUVNHkt7klen50zKtw5Dd5RhekB2WyYDPeAjG12L7AGbgew2u9+M+hZSMIZ/0OxS8P2XqLpL20aCAFEbs7eHqWtwbbhqic/5SyJPGgbwoxq6RcUCLeN+JlTpMqyIXvig9frfxj8YtP5PYDm6FyvcXfYl0SZUKXv8cXiTdVk2KHvcRwVVQq6B2HwKhmX6veH+vvkHFF4BIEZpUZA7qkAArPyvTKJXTyOdKn6oyjyinu478wr6w3BFfmxPH3G8VPddxZa1bJFuBrCLl+/iL2oOvGAgl9JRZXSlgovvaP21cSvg99mfx1El7VjJVjEu1/JWGm50PdBv1/kjAJDGuBXayFbwnPXEIXa1VyARH44ShwUMGZZ9d7hbUAS9HLJWRdcNgH8KXtzVq4W/wTaBmSyfVKusXv3bD7it4Cias9hpwSM2wZpKAms4wCkWefxtXzFnaCB/nm39Pguox8ZLi/AY+e5vP2X6mYM7Dzck4XFnjrObbgASo5zX8KnDVyEC+JWsCCtmGJGn/x4VfHAtR5jXECNaqOE3TrgrbhPzCdy9sabCrm1X4Rgp3QzGYF63R2iZdOi2RD8G2CZz4inDVD4069roM4bfQNcV02VyUIYrraZ5jbGTXi26URBnHGXMAmJON02cxbAO4W+ixc8DG+pt4/Q3lxqB+laZpQ9P8Z3mz49E5HUnff5rAfJDMEU/WvLACUFVUtlFNEh11VJSzggExtxc573QJushE/JceifnTPIFRLvIEBldSAMSmb/GfEGGMKF5mFub/E2fBMk6jOnwFh1C1TpllwqlfwzOsI5MyWCz+bA1RNOzAUTpd+1shKycaSEhwGl1ORyWypr8iCouRp9ybAhMwOfR36+Qw6cPd8Cvj1AMLEBkCL9dftkbXPZdnQsPI4MAP82cvg8P1L4Smpf3uV2EJKBLHE/8rmkJ/udRwXxTliOBdFHNf3U35oSmT5jnEtQpr2z2Pg7KcK7eIxnVgJz3qpwgROQVBx+qxVyt8wVt9BfLHNHpOtV/fFMU1gZIfFix1AQyVpb0fzktoam5B/xhrOTjat2Sv5qvs5gwfZwBiXb3wKVwCNkhX3xrpCEC7b7Sfy2FnIvIO9OKs7BZbeYiJmANQztAWdFRfLRCKCXtvuyKtCAeIrE1IU2ueCVYq+sXL0uA4yNybBj+1kvBlk12Flnk6WxLsIjNzGksDH1Vj+xuJH1HXIoNhuJmOaa7+ESFjee3805SNRorwMlp1rbA5EajUQ5E59ePtKzwdDsZFN+Cff2v5D/exxdxHCPPlR2EEOaXsOztFTCcHcH+QZgKLRFewcV+x3ULmgwzpp5A9882Uq9IRQM+7VBk4fU4jrQCgTwXVSV+oaQstknFWI1Ysb+ozHFzKnyFkXZE1Y9wAmLrxwstRkIk0PkOCD5vGA1QvXhk268Cnjf9agN1b9BHwJNlhgSMxwU3UBwpPZk5VQeGm9fGPtwZcpD1RTWKO2uPVWfLfx2ZZYgkQ/p85A4W5Uu8lUGfFnwo5MusT2u5byG8DURM7/GidXrocAswCjeoy3KFc2PPPGMzSh5WZkylol5Qd8nJs0uXjiqFWnMIVvMBfmJrk+pbPQW5rGHPuR509pRA9HAOwprqiSHDI35tEcMqGkEZpywc6K3gP/xPS4H8bZITTi7R0UP6jVFv4YLzGNo1MCa5FCFNRP4PSl4DPyjJDhzaSXsTOLjZsA8zZ4R9xjI5M/eRTT6FIsn4Nwf2frtaDaC9CrpoYoLV50QAw9cRc7mOuZ0UJQIajwDsXyGcCPLgQJsPmaCHLc+vuNPUll6i14+cyPAISzBu8OTFxn59CCTNynBfeET13A09hGsag29qBAqLtefPcFfGcsrb9YiPh7bQNx7CJzrtAmybDT6ZSAI4Ouc1AXi2pgQxdKtDO4usex+urTP3+aTqQanyy0ezFXlmSo13vAOjp3B/OlSGGurkn5gpHBe6oT7OBag236rReOrUvJiky5+7MTY06ibvgj9TIOyXxwp5an2wow5N8uH+6kw2JM4WMu6Wva9It4xy0DUr9F7bsvV+kljvIUhbFrZ9PiZuVMklDdBg2kpd/F/IdVVA8QZKTjZws2o6s3U5eZgOuhFitYegI5Uj3OEOGZinduG459a4j2XQ5xDMhdKD1TuFjX0RSOsOlN2zlfdPuQhL8LFLmz7/hloWrMMVc2wcQqNW/+n67S15oDK4lUEcYkNmO5JEy6k6JpnLopgKZx5P4b4DvLTU8pjosxia+5ZWouxgZNXcaO96zFF7CWHCYxVZkV+s9Fc6rGiCOPqsV3cMXgZ39p8YXXtlwhE2EBhZGiGZ3pUmBM1EV5y0U/dm96bbApHI5/aCGuYfPvzp73Vfe8F4Oi9l3PW0T4i9GTPjRTD05LaHzwqb05TiUaAI/3DS7DDVyxpQgYskj2Rg+xvUXP6N7DiEWJfP5HRX3clnN0BehBNK+seHkMPWNiHVs+kcUwtDTfsLiQeZ8ZyBD/rUKUcJtn+2/UgukKNQvDPllSbeODzq2oXUDeZ85giCMcb3awSUQ+OJzRVzL5BwvNrI02Y5MRGsZeaP5ClkImQ8RE3rN3E6bSQk0fnj8q/T9AWPN+/JiF3JHjeeJ7edA+hVlbMyC7GCDyNr1WMdhTC56XxqjGhY+H5u3POoVeYSlUi8Ix3fFgQ62/l8gVgdAH+MORMrDSajYCefNl6mS8O7JXSTAe/j3rsamD7zHNDz6xzTm9y+WAgo8QpI9K8SnsxmM7a96vmAubIkyO0fl8s20cmHueuMnMsqtALMsy/R3/EGVBLSCi8fqC0hN//WG3GAswC8dQHjB+LFZL3fitfL6OXLHZBOfa0tDLh/LvaX67BVA4Fl5+bKs+tap8KPzoMYxCJe6gUO0XCHpPjMXGHVmAYNSIQYPtkNs5e2mcEzLTJO1X0FvjqQwz7rEp66mcVDZT6BRLoV8W1n5xMdgui2cX16MItJ8guGO6hHsiivcrtIYrBT2C+q/iG4L+GmY10vu/DYtom0MmJ4P0hVFeiJGo0hzcmYkUXM3omhM8tygPzN+19T77DJKD2cUREx4HaFG22FYOsfOXzIDoAWEOnEDjJ0m16emEzJQRoIdoQtm43Gzws42EUGsNSHDpVGR4B1luZXdXl1OhKDcgqrlUdeCzUs0c48fTStMNR70HN0GqM8wAAwW6zOuCuixwvHDmYBoAioCkv0HprbhTHrSF7o0Iyf/uXP65sfPYOY39ktciAbKU5xNHLcvHpSJTXPZedT//gAGtIq1tvY35cGRviH75vn7auDhHx+MtkTger1FRxPXrUSpu9ERSrhevvPs4g5j1QjocllGPktDDJFg9V+JwTAo9f/ydfEo7BxF/DShheBNvAM/joLfPrJnCoWE/c8fNZ3N2HkeQ+7U+0CMvn5CuX8dheaivKW+t6bW7J7RupHc5jdrH5VfHK9m0BeyM5eXxfeVak5fOPhgGrkY97sGTXIs6b0ocrpjSXvmEuGyG80Sa4wbp2r8WSwHv6mA7ipzerkWrxONjSAF/rtbMhjhE6rFrOW9uMlkIF3npJqUmEHDtjWP6veifZ+zrHjsOpJbISQccTLPwByFlNee7elc1x+UmQ5D4HKt80U9ixhi8VaX/BOJlThHkzEetvaBaM5uO4DGiv47eLt1bIHQw1BFEkPPJHKarndssfh5OHXg6WyAFfHCEFrosLy6SbeHWRUlsOKkwREezBTUJG91bcxO3TliCmSlzGhAyLeUEfXf3dO1mJhimoHRh4S5mVHle2JUC9nE4d6S7g1phu+4kLOFi1M4l3Dz7NAHOwHCoUYoT6YNMoqG3wxeZOUW+TP6KzpAK+1RQKFwOevNmX586hrcWQHxzYYWJgF0U4J0qD8yp8dbObE2HVkj7imyTWz786VfCdk34ZhD4HAtTrPbtrY/SKglF8z2pchzgeZWuk1B/9pFjUPs/2ocD5MmLJZ6cgGddWrjr0gGJJJo6J5ecny+xDdb11T9qVXjHkI/7NL76ma3y/COjtcXTZeZ5qZX4ekZgsiJR1JocU1Q53Jirq+e7FfgacuC1yKPccirR8p2BNIm3xyGVjvZYOcqN4078f5ny89AanHjAYTohrOKqPMAqVgKN0YH1EZ7vnPn5BGqnRSSppZxMnTtwVikgxN6AHeSIq0OQr3S2EU9eU54+i+eCW9iG/nLecI52ZrF9K+xU2cNC6Xcz16uBc079pdrEECZt/k1pTaRxJY+y/oYm7Xk2JpT9OYAjOeE3qjSxUN9MKmd16rHBuWePZoA4S22bxBopxNux8cuVUCO0PTYYzrO4+r3bAMhnI4OR/qhURnyxSBArH0D4MdKqQPv32UZYZnuNPiXm43LtsUGmPg2Y4E6fZsE58vxUZyBakgpMRhqddFYYfk7SYV5qamPoASeS22cItTxPoSRa9uMLmvw0VPCNx9zPBndH7anqA8Xkkv/8/BzkPXJ6Ts+miNXcxJiFgS3HFzTUJp8BaUypf+Hh6mYHKE2+53JNJclnuGPY34MfFBwmRET46TYBWTcl44dbB/4ap3A8QKT1VlzCzUrLRebxNn+IKn18Q2PT17qqZvJTYfMi1T+wBwXaofP1oGYGyh0uT78paV57K0MZY8Nl+nvk78kkdmTxo3mWlyavz7830Vnx6p5lVV0OtbfUzI4dO3bs2LFjx44dO3bsWIOiVRBHHp/BuBU68eAtdoAyOHgs8m2Cg5k4QrjcJCxv6x4+zpCOJAxWdIlYg7JfIqEPnjeVEPFTaCHPd7r1q1yHgazghck+SCjOI6XRg+XhHQlga/BvSNgjpb3zNyARUgl9JE5NCaGgqbwQnS5lVTZ3I3d6rA/Psiybh2VizqfuWT7zlhuf43ccDydu0Cnu8cdPCBxLSLmYsodcUWIyPLRs6IagGJK6Yqnj4XXjkEF6Cvh7BDf0Om3IC1P0EZHzj0r4OMYS0od3iR1zUGsZGKqcBSJ67VT5/ploVe+hc5je3uSPzwaNJaQ8PmDxUSLbkOBnxQh4ygY9zsce2sk0kyyOc/IigrcG7kYbQiFxmFnvc0jbKfGCL6WukaqOblFN+6vB4QoyeAZ5G7cnVvwVlo49iBzh5uf7zppR4OjrnOcPyhJu8h6Hv7X7YwkpaYGtUjpcUdykxXpOs23DDjwfxqHm65TRVghv/xRVKCABE/4f0qW0mS4TZFCrCsNgWJv8s6kyVnqWm7P+6PKVZzDTSjyh5Z+xh19XusXogdmB/61xQgeJLYwDRX3QzaZwv48iWPlnJGTnetlhrWFCNAbGwNK0EAyHXuaM0kVJjnZd6VXCoIkZ6gPT9Pyoz8DnQ69Y4oUUkdNjEdcUdDFTCQezMMEE9ithIB7OTFcZ4Ud9qHeDlPCRGgy2L48dwtrLVEK6U+0cTs8SqkCCKWp/fhWV8GSyLpiEJzKyPQDPEjL/i7O9xTCe6nsAKiElByO1wRSTkOph+yETzxJWDHRVSoJsJ/aXAXpwmDTQfqYRn6M0RfsjIf8NXcpUoeBOUIK7jdgb61MlJWTegpXy/W9IyAy2OB1Ez4vaTvkaZuQiVilXTjI8isUS8Cuh1H60b4Loj0Hp34p5i/g7g0KRRwvowTAuITOn4qDQGWNoykwn2gc3ypCQLTPwtNihX+jGO1C62JqNVbN3JVLT8GPpCNGnuCZUtYas8zJtjMl6WnvwvBUL1mpeCTsuisKg6bpqiBSZy8nJqN9Zklx5a2KQkJ+EJri6lJiFXmzNsiOAuDsdPtkY2QGmhMyRkY/zhd4l4Aww/cI4wWRo6g0UYNhw4tGJ7AgREneL257+QhvkuWYwkjChHop4pdAidtGUX2l/Si6DzpVW5VYqnchJJdLL8kmo7z0EYS2akJBQWzZFOORSxIDTO8+6EIIvUunELE/TT+OJpmHU558MqR1WJAhUWZKGf6X808JBVPTQg4Hz8JKq16/to+sOr0JfXNf6kef3olcpx/b7u9XUR1bUr1cdm+WBW/045LXP5oI7duzYsWPHjh07duxYwH+M2cBnKaIKvQAAAABJRU5ErkJggg==",
                                "height": 30,
                                "width": 30
                            },
                            {
                                "src": "https://img2.freepng.es/20190623/yp/kisspng-python-computer-icons-programming-language-executa-5d0f0aa79779a6.6143656815612668556205.jpg",
                                "height": 30,
                                "width": 30
                            },
                            {
                                "src": "https://img2.freepng.es/20180526/xso/kisspng-microsoft-azure-sql-database-microsoft-sql-server-5b098c6aafe671.6699247615273524267205.jpg",
                                "height": 30,
                                "width": 30
                            }
                        ]
                    },
                    "color": {
                        "value": "#CCC"
                    },
                    "size": {
                        "value": 30,
                        "random": false,
                        "anim": {
                            "enable": true,
                            "speed": 4,
                            "size_min": 10,
                            "sync": false
                        }
                    }
                },
                "retina_detect": false
            }}/></div>
        )
    }
}
