OpenStack vs. Ganeti
====================

HTML presentation on the differences between OpenStack and Ganeti and how they
inter-relate.

To build and view, do the following:

::

  virtualenv venv
  pip install -r requirements.txt
  make slides

Proposal
--------

OpenStack has gained a lot of prominence in the cloud ecosystem, but it can be a
difficult platform to setup and maintain. Ganeti is a lesser known FOSS
virtualization platform created by Google that primarily provides a simple to
use compute service. Both of these platforms have their strengths and
weaknesses.

At the OSU Open Source Lab, we have been long time users and promoters of Ganeti
since 2009. It’s enabled the lab to better serve its FOSS hosting activities in
a stable yet easy to use manner. Over the past year we have been also building
and using OpenStack clusters to fill other computing needs that Ganeti doesn't
fill very well.

Ganeti is software developed at Google which can be used to manage physical
hardware in order to host virtualization workloads. Used worldwide and highly
customizable, Ganeti architecture makes it easy to install, maintain, extend and
use. Compared to other platforms, Ganeti is a great fit for medium to small
organizations that need a simple virtualization cluster will few to no cloud
features.

This session will cover the Ganeti platform, how it's being used, how the
project and community is evolving and how to deploy it into your infrastructure.

Outline
-------

* Compute needs of today
* Openstack Review
* Ganeti Introduction
* Ganeti walk-through
* Use cases for each platform
* Using both
