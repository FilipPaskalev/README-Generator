export default artisticV2 = (year, copyrightHolders, productType) => {
  if (!productType) {
    productType = 'Software/Artistic Work';
  }

  return `Artistic-2.0 License

Copyright (c) ${year} ${copyrightHolders}

Permission is hereby granted, free of charge, to any person obtaining a copy of this ${productType} and associated documentation files (the "${productType}"), to deal in the ${productType} without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the ${productType}, and to permit persons to whom the ${productType} is furnished to do so, subject to the following conditions:

1. Redistributions of the ${productType} must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the [organization] nor the names of its contributors may be used to endorse or promote products derived from this ${productType} without specific prior written permission.

THIS ${productType} IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS ${productType}, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;
};
